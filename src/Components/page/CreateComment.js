import React, { Component } from "react";

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: [],
      name: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      "http://localhost:3003/networgram/post/" +
        this.props.currentPostId +
        "comment",
      {
        method: "POST",
        body: JSON.stringify({
          name: localStorage.getItem("id"),
          comment: this.state.comment,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((resJson) => {
        console.log("NewForm - resJson", resJson);
        this.props.createComment();

        this.setState({
          comment: resJson.comment,
        });
      })
      .catch((error) => console.error({ Error: error }));
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          {/* <div>
            <input
              type="text"
              id="name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              placeholder="name"
            />
          </div> */}

          <div>
            <input
              type="text"
              id="content"
              name="content"
              onChange={this.handleChange}
              value={this.state.content}
              placeholder="comment"
            ></input>
          </div>

          <input type="submit" value="Add a comment" />
        </form>
      </>
    );
  }
}

export default CreateComment;
