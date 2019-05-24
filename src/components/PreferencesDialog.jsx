import React from "react";
import { Button, Classes, Dialog, Intent, Switch } from "@blueprintjs/core";
import { observer } from "mobx-react";
import classnames from "classnames";
import appState from "../stores/index";

@observer
export default class PreferencesDialog extends React.Component {
  render() {
    return (
      <Dialog
        iconName="cog"
        className={classnames({
          [Classes.DARK]: appState.preferences.darkMode
        })}
        isOpen={appState.preferences.dialogOpen}
        onClose={() => {
          appState.preferences.dialogOpen = false;
        }}
        title="Preferences"
      >
        <div className="pt-dialog-body">
          <Switch
            label="Dark Mode"
            checked={appState.preferences.darkMode}
            onChange={() => {
              appState.preferences.darkMode = !appState.preferences.darkMode;
              if (appState.graph.frame) {
                appState.graph.frame.toggleDark();
              }
            }}
          />
        </div>
        <div className="pt-dialog-footer">
          <div className="pt-dialog-footer-actions">
            <Button
              intent={Intent.PRIMARY}
              onClick={() => {
                appState.preferences.dialogOpen = false;
              }}
              text="Save"
            />
          </div>
        </div>
      </Dialog>
    );
  }
}
