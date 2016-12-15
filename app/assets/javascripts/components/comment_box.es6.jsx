class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
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

  render() {
    return(
      <div className='commentBox'>
        <h2>Comments</h2>
        <CommentList data={this.props.data} />
        <hr />
        <CommentForm />
      </div>
    );
  }
}
