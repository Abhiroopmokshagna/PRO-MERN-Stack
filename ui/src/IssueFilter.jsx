import React from "react";
import { withRouter } from "react-router-dom";
import URLSearchParams from "url-search-params";
class IssueFilter extends React.Component {
  constructor({ location: { search } }) {
    super();
    const params = new URLSearchParams(search);
    this.state = {
      status: params.get("status") || "",
      effortMin: params.get("effortMin") || "",
      effortMax: params.get("effortMax") || "",
      changed: false,
    };
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.showOriginalFilter = this.showOriginalFilter.bind(this);
    this.onChangeEffortMax = this.onChangeEffortMax.bind(this);
    this.onChangeEffortMin = this.onChangeEffortMin.bind(this);
  }
  applyFilter() {
    const { status, effortMin, effortMax } = this.state;
    const { history } = this.props;
    const params = new URLSearchParams();
    if (status) params.set("status", status);
    if (effortMin) params.set("effortMin", effortMin);
    if (effortMax) params.set("effortMax", effortMax);
    const search = params.toString() ? `?${params.toString()}` : "";
    history.push({
      pathname: "/issues",
      search,
    });
  }
  componentDidUpdate(prevProps) {
    const {
      location: { search: prevSearch },
    } = prevProps;
    const {
      location: { search },
    } = this.props;
    if (prevSearch !== search) {
      this.showOriginalFilter();
    }
  }
  showOriginalFilter() {
    const {
      location: { search },
    } = this.props;
    const params = new URLSearchParams(search);
    this.setState({
      status: params.get("status") || "",
      effortMin: params.get("effortMin") || "",
      effortMax: params.get("effortMax") || "",
      changed: false,
    });
  }
  onChangeStatus(e) {
    this.setState({ status: e.target.value, changed: true });
  }
  onChangeEffortMin(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effortMin: e.target.value, changed: true });
    }
  }
  onChangeEffortMax(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effortMax: e.target.value, changed: true });
    }
  }
  render() {
    const { status, changed } = this.state;
    const { effortMin, effortMax } = this.state;

    return (
      <div>
        <div>
          Status:{" "}
          <select value={status} onChange={this.onChangeStatus}>
            <option value="">(All)</option>
            <option value="New">New Issues</option>
            <option value="Assigned">Assigned Issues</option>
            <option value="Fixed">Fixed</option>
            <option value="Closed">Closed</option>
          </select>{" "}
          Effort between:{" "}
          <input size={5} value={effortMin} onChange={this.onChangeEffortMin} />
          {" - "}
          <input size={5} value={effortMax} onChange={this.onChangeEffortMax} />
          <button type="button" onClick={this.applyFilter}>
            Apply
          </button>
          <button
            type="button"
            disabled={!changed}
            onClick={this.showOriginalFilter}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(IssueFilter);
