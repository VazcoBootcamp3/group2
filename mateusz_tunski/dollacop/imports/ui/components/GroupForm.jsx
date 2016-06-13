import React, { Component, PropTypes } from "react"
import { Meteor } from "meteor/meteor"
import _ from "lodash"

export default class GroupForm extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object)
  }

  state = {
    name: "",
    members: []
  }

  handleSubmit = (ev) => {
    ev.preventDefault()

    const { name, members } = this.state
    Meteor.call("groups.create", name, members)

    this.setState({
      name: "",
      members: []
    })
  }

  handleNameChange = (ev) => {
    let { name } = this.state
    name = ev.target.value
    this.setState({ name })
  }

  handleMemberChange = (ev) => {
    const { members } = this.state
    const member = JSON.parse(ev.target.value)
    member.invitation.state = "pending"

    if (ev.target.checked) {
      members.push(member)
    } else {
      _.remove(members, el => el._id === member._id)
    }

    this.setState({ member })
  }

  renderNameField() {
    const { name } = this.state

    return (
      <input
        type="text"
        value={name}
        required
        placeholder="Name"
        onChange={this.handleNameChange}
      />
    )
  }


  renderMembersFields() {
    return (
      <fieldset>
        <legend>Members</legend>
        {
          this.props.users.map(user => (
            <label key={user._id}>
              <input
                type="checkbox"
                checked={_.some(this.state.members, ["_id", user._id])}
                value={JSON.stringify({ _id: user._id, name: user.profile.name })}
                onChange={this.handleMemberChange}
              />
              {user.profile.name}
            </label>
          ))
        }
      </fieldset>
    )
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderNameField()}
        {this.renderMembersFields()}
        <button
          className="button"
          disabled={this.state.members.length === 0}
        >
          Submit
        </button>
      </form>
    )
  }

  render() {
    return (
      <div className="wrap">
        <h2 className="h1">New group</h2>
        {this.renderForm()}
      </div>
    )
  }
}
