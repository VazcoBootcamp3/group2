import React, { Component, PropTypes } from "react"
import _ from "lodash"

export default class GroupsListItem extends Component {
  static propTypes = {
    _id: PropTypes.string,
    currentUser: PropTypes.object,
    admin: PropTypes.object,
    members: PropTypes.arrayOf(PropTypes.object),
    name: PropTypes.string,
    removeGroup: PropTypes.func,
    acceptInvitation: PropTypes.func,
    leaveGroup: PropTypes.func
  }

  handleDeleteClick = () => {
    this.props.removeGroup(this.props._id)
  }

  handleAcceptInvitationClick = () => {
    this.props.acceptInvitation(this.props._id)
  }

  handleLeaveClick = () => {
    this.props.leaveGroup(this.props._id)
  }

  renderActions() {
    const { currentUser, admin } = this.props
    const handlers = {
      delete: { handler: this.handleDeleteClick, text: "Delete" },
      accept: { handler: this.handleAcceptInvitationClick, text: "Accept" },
      leave: { handler: this.handleLeaveClick, text: "Leave" }
    }

    let action = null
    if (currentUser._id === admin._id) {
      action = "delete"
    } else {
      const { members } = this.props
      const { invitation } = _.find(members, { _id: currentUser._id })

      if (invitation.state === "pending") {
        action = "accept"
      } else {
        action = "leave"
      }
    }

    return (
      <button
        className="button"
        onClick={handlers[action].handler}
      >
        {handlers[action].text}
      </button>
    )
  }

  renderName() {
    const { name } = this.props

    return <div>Name: {name}</div>
  }

  renderAdmin() {
    const { currentUser, admin } = this.props
    const adminName = (currentUser._id === admin._id ? "You" : admin.name)

    return <div>Admin: {adminName}</div>
  }

  renderMembers() {
    const { members } = this.props

    return (
      <div>
        Members:
        {
          members.map((member, index) => {
            const affix = (members.length === index + 1 ? "" : ", ")
            return (`${member.name}${affix}`)
          })
        }
      </div>
    )
  }

  render() {
    return (
      <div className="row groups__item">
        <div className="col-xs-10">
          {this.renderName()}
          {this.renderAdmin()}
          {this.renderMembers()}
        </div>
        <div className="col-xs-2 text-right">
          {this.renderActions()}
        </div>
      </div>
    )
  }
}
