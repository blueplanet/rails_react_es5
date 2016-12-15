class CommentForm extends React.Component {
  render() {
    return(
      <form className='commentForm'>
        <input type='text' placeholder='Your name' />
        <input type='text' placeholder='Say someething...' />
        <input type='submit' value='Post' />
       </form>
    );
  }
}
