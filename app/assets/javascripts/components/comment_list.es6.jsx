class CommentList extends React.Component {
  render() {
    var commentNodes = this.props.data.map((comment)=> {
      return(<Comment key={comment.id} author={comment.author}>{comment.text}</Comment>);
    });

    return(
      <div className='commentList'>{commentNodes}</div>
    );
  }
}
