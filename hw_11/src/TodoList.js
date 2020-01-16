import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

const useStyles = {
  width: "100%",
  maxWidth: "360"
};

export default class TodoList extends React.Component {
  handleUpdate = () => {
    this.props.updateChecked(this.props.completed, this.props.id);
  };

  handleDelete = () => {
    this.props.deleteTask(this.props.id);
  };

  render() {
    return (
      <List style={useStyles}>
        <ListItem key={this.props.id} dense button>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={this.props.completed}
              onChange={this.handleUpdate}
              inputProps={{
                "aria-labelledby": `checkbox-list-label-${this.props.task}`
              }}
            />
          </ListItemIcon>
          <ListItemText
            style={this.props.styling}
            id={`checkbox-list-label-${this.props.task}`}
            primary={this.props.task}
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="comments"
              onClick={this.handleDelete}
            >
              <Icon>delete</Icon>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    );
  }
}
