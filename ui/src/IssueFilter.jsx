import React from "react";
import { withRouter } from "react-router-dom";
class IssueFilter extends React.Component {
  constructor() {
    super();
    this.onChangeStatus = this.onChangeStatus.bind(this);
  }
  onChangeStatus(e) {
    const status = e.target.value;
    const { history } = this.props;
    history.push({
      pathname: "/issues",
      search: status ? `?status=${status}` : "",
    });
  }
  render() {
    return (
      <div>
        {/* <Link to="/issues">All Issues</Link>
        {" | "}
        <Link to={{ pathname: "/issues", search: "?status=New" }}>
          New Issues
        </Link>
        {" | "}
        <Link to={{ pathname: "issues", search: "?status=Assigned" }}>
          Assigned Issues
        </Link> */}
        <div>
          Status:{" "}
          <select onChange={this.onChangeStatus}>
            <option value="">(All)</option>
            <option value="New">New Issuesy</option>
            <option value="Assigned">Assigned Issues</option>
            <option value="Fixed">Fixed</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>
    );
  }
}

export default withRouter(IssueFilter);
