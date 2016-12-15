class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='commentBox'>
        <h2>Comments</h2>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
}
