import React from "react";
import { withRouter } from "react-router-dom";
import URLSearchParams from "url-search-params";
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
    const {
      location: { search },
    } = this.props;
    const params = new URLSearchParams(search);
    return (
      <div>
        <div>
          Status:{" "}
          <select
            value={params.get("status") || ""}
            onChange={this.onChangeStatus}
          >
            <option value="">(All)</option>
            <option value="New">New Issues</option>
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
