import { render } from "@testing-library/react";
import React, { Component } from "react";
import LinkLists from "./LinkLists";
import img from "../image/background.png";
import android from "../image/android.svg";
import apple from "../image/apple.svg";

class Hero extends Component {
  state = {
    list:
      localStorage.getItem("linkList") === null
        ? []
        : [...JSON.parse(localStorage.getItem("linkList"))],
    error: false,
    success: false,
    inputValue: "",
  };

  handleChange = (e) => {
    this.setState({ inputValue: this.input.value });
  };

  handleInput = () => {
    this.setState({ success: true });

    if (this.state.success) return;

    fetch(`https://api.shrtco.de/v2/shorten?url=${this.input.value}`)
      .then((data) => data.json())
      .then((linkData) => {
        if (linkData.ok) {
          localStorage.setItem(
            "linkList",
            JSON.stringify([
              {
                id: this.state.list.length,
                oldLink: this.input.value,
                newLink: linkData.result.short_link,
              },
              ...this.state.list,
            ])
          );

          this.setState({
            list: [
              {
                id: this.state.list.length,
                oldLink: this.input.value,
                newLink: linkData.result.short_link,
              },
              ...this.state.list,
            ],
            error: false,
            success: false,
          });

          navigator.clipboard.writeText(linkData.result.short_link);
          this.input.value = "";
        } else {
          this.setState({
            error: true,
            success: false,
            errorMessage: "This is not a valid URL or you are blocked.",
          });
        }
      })

      .catch((error) => console.log("Error: ", error));
  };

  render() {
    let error = this.state.error && !this.state.success ? "error" : "";
    let successBtn = this.state.success ? "success-btn" : "";
    let success = this.state.success ? "success" : "";
    let buttonMessage = this.state.success
      ? "Wait it!"
      : this.state.error
      ? "Try Again!"
      : "Shorten it!";
    let errorMessage = this.state.error ? this.state.errorMessage : "";

    return (
      <>
        <div className="hero" style={{ height: window.innerHeight }}>
          <div className="container">
            <div className="left">
              <h1>
                Shorter Link to <br /> Better Experience
              </h1>
              <p>
                Build your brand's recognition and get detailed insights on how
                your links are perfoming.
              </p>
              <div className="icon">
                <img className="margin-right" src={android} alt="" />
                <img src={apple} alt="" />
              </div>
            </div>
            <img src={img} class="img" alt="" />
            <div className="img-div"></div>
          </div>
        </div>
        <div className="input-bg">
          <div className="input-box">
            <div className="input">
              <input
                ref={(el) => (this.input = el)}
                type="text"
                placeholder="Shorten a link here..."
                className={`${error} ${success}`}
                value={this.state.inputValue}
                onChange={this.handleChange}
              />
              <p
                onClick={this.handleInput}
                className={`button ${successBtn} ${error} ${success}`}
              >
                {buttonMessage}
              </p>
            </div>
            <p className="error-message">{errorMessage}</p>
            {this.state.list.length > 0 && <LinkLists list={this.state.list} />}
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
