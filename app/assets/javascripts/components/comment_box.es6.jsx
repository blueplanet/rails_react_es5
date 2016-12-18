class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data
    };
  }

  loadCommentsFromServer() {
    $.ajax({
      url: '/comments',
      dataType: 'json',
      cache: false,
      success: (data) => { this.setState({data: data}); },
      error: (xhr, status, error) => {
        console.error(this.props.url, status, error.toString());
      }
    })
  }

  handleCommentSubmit(comment) {
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data:[newComments]});

    $.ajax({
      url: '/comments',
      dataType: 'json',
      type: 'POST',
      data: comment,
      errors: (xhr, status, err) => {
        console.error(status, err.toString());
      }
    });
  }

  componentDidMount() {
    // this.loadCommentsFromServer();
  }

  render() {
    return(
      <div className='commentBox'>
        <h2>Comments</h2>
        <CommentList data={this.state.data} />
        <hr />
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
      </div>
    );
  }
}
