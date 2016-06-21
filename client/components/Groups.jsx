import React from 'react';
import {Paper, TextField, RaisedButton, SelectField,
  MenuItem, GridList, GridTile, Subheader, IconButton} from 'material-ui';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import GroupTile from './GroupTile';


// const style = {
//   height: 200,
//   width: 200,
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 800,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const backgroundImages = [
  'http://www.tidanhotels.com/files/23/social-groups.jpg',
  'https://thoughtcatalog.files.wordpress.com/2015/09/screen-shot-2015-09-01-at-3-23-23-pm.png?w=786&h=522',
  'https://media.timeout.com/images/101705313/image.jpg',
  'http://www.calisia.pl/uploads/photo/image/55476ae36e6f640c09750800/article_foto_1.JPG',
  'http://boykinsbasketball.com/wp-content/uploads/2015/10/5451a9bac173c.preview-699.jpg',
  'http://bostonhostel.org/wp-content/uploads/2012/05/shutterstock_20253523.jpg',
  'https://udemy-images.udemy.com/course/750x422/679682_7563_2.jpg',
];


export default class Groups extends React.Component {

  constructor() {
    super();
    this.handleJoinGroup = this.handleJoinGroup.bind(this);
  }

  getRandomImage() {
    var index = Math.floor((Math.random() * backgroundImages.length));
    return backgroundImages[index];
  }

  handleJoinGroup(e) {
    Meteor.call('groups.addMember', {groupId: e.currentTarget.id})
  }

  renderGroups() {
     return this.props.groups.map((group) => (
       <Paper key={group._id} style={style} zDepth={3} circle={true}>{group.group.name}</Paper>
     ));
   }


//wersja robocza
   renderGroupTiles() {
     return this.props.groups.map((tile) => (
       <GroupTile key={tile._id} image={this.getRandomImage()} name={tile.group.name} newStyle={styles.root}/>
     ));
   }


//wersja robocza
   renderGroupTiles2() {
     return this.props.groups.map((tile) => (
       <GridTile
         key={tile._id}
         title={tile.group.name}
         actionIcon={<IconButton id={tile._id} onClick={this.handleJoinGroup}><StarBorder color="white" /></IconButton>}
       >
       <img src={this.getRandomImage()}></img>
       </GridTile>
     ));
   }

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={150}
          padding={10}
          col={1}
          style={styles.gridList}
        >
          <Subheader>Grupy</Subheader>
          {this.renderGroupTiles2()}
        </GridList>
      </div>
    );
  }
}
