import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

export default class Header extends React.Component {
  handleSubmit = () => {
    this.props.submit();
  };

  handleChange = e => {
    this.props.change(e.target.value);
  };

  render() {
    return (
      <div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Icon>create</Icon>
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="Write your task here"
              value={this.props.value}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item>
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </label>
          </Grid>
        </Grid>
      </div>
    );
  }
}
