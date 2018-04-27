// tslint:disable:typedef
import * as React from "react";
import { Button } from "react-bootstrap-typescript";
import { Link } from "react-router";

export default class Welcome extends React.Component {
  public render() {
    return (
      <div className="signin_tab">
        <header>
          <p>Welcome to React-Redux-Saga using Typescript with Routing</p>
        </header>
        <main>
          <form>
            <section>
              <Link to="/signup">
                <Button className="signin_btn" bsStyle="success" type="submit">
                  {/* onClick={::this.handleSubmit}> */}
                  <p className="m-0">Sign Up</p>
                </Button>
              </Link>
            </section>
          </form>
          <div>
            <p className="sign_or"> Or </p>
            <Link to="/signin">
              <Button bsStyle="default" className="signin_btn">
                Sign in
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }
}
