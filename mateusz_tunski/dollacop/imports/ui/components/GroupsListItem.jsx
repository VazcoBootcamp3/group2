import React, { Component, PropTypes } from "react"

export default class GroupsListItem extends Component {
  static propTypes = {
    _id: PropTypes.string,
    currentUser: PropTypes.object,
    admin: PropTypes.object,
    members: PropTypes.arrayOf(PropTypes.object),
    name: PropTypes.string,
  }

  renderName() {
    const { name } = this.props

    return <div>Name: {name}</div>
  }

  renderAdmin() {
    const { currentUser, admin: { _id, name } } = this.props
    const adminName = (currentUser._id === _id ? "You" : name)

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
      <div className="row">
        <div className="col-xs-12">
          {this.renderName()}
          {this.renderAdmin()}
          {this.renderMembers()}
        </div>
      </div>
    )
  }
}
