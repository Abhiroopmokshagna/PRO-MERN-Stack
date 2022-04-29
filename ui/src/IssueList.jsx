import React from "react";
import IssueFilter from "./IssueFilter.jsx";
import IssueTable from "./IssueTable.jsx";
import graphQLFetch from "./graphQLFetch";
import URLSearchParams from "url-search-params";
import { Route } from "react-router-dom";
import IssueDetail from "./IssueDetail.jsx";
import { Panel } from "react-bootstrap";
import PanelHeading from "react-bootstrap/lib/panelheading";
import PanelTitle from "react-bootstrap/lib/paneltitle";
import Toast from "./Toast.jsx";
import store from "./store.js";
export default class IssueList extends React.Component {
  constructor() {
    super();
    const issues = store.initialData ? store.initialData.issueList : null;
    delete store.initialData;
    this.state = {
      issues,
      toastVisible: false,
      toastMessage: " ",
      toastType: "info",
    };
    this.closeIssue = this.closeIssue.bind(this);
    this.deleteIssue = this.deleteIssue.bind(this);
    this.showSuccess = this.showSuccess.bind(this);
    this.showError = this.showError.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
  }
  componentDidMount() {
    const { issues } = this.state;
    if (issues == null) this.loadData();
  }
  componentDidUpdate(prevProps) {
    const {
      location: { search: prevSearch },
    } = prevProps;
    const {
      location: { search },
    } = this.props;
    if (prevSearch !== search) {
      this.loadData();
    }
  }
  static async fetchData(match, search, showError) {
    const params = new URLSearchParams(search);

    const vars = {};
    if (params.get("status")) vars.status = params.get("status");

    const effortMin = parseInt(params.get("effortMin"), 10);
    if (!Number.isNaN(effortMin)) vars.effortMin = effortMin;
    const effortMax = parseInt(params.get("effortMax"), 10);
    if (!Number.isNaN(effortMax)) vars.effortMax = effortMax;

    const query = `query issueList(
        $status: StatusType
        $effortMin: Int
        $effortMax: Int
      ) {
        issueList(
          status: $status
          effortMin: $effortMin
          effortMax: $effortMax
        ) {
          id title status owner
          created effort due
        }
      }`;
    const data = await graphQLFetch(query, vars, this.showError);
    return data;
  }

  async loadData() {
    const {
      location: { search },
    } = this.props;
    const data = await IssueList.fetchData(null, search, this.showError);
    if (data) {
      this.setState({ issues: data.issueList });
    }
  }

  async closeIssue(index) {
    const query = `mutation issueClose($id: Int!) {
      issueUpdate(id: $id, changes: {status: Closed}) {
        id title status owner effort created due description
      }
    }`;
    const { issues } = this.state;
    const data = await graphQLFetch(
      query,
      { id: issues[index].id },
      this.showError
    );
    if (data) {
      this.setState((prevState) => {
        const newList = [...prevState.issues];
        newList[index] = data.issueUpdate;
        return { issues: newList };
      });
    } else {
      this.loadData();
    }
  }
  async deleteIssue(index) {
    const query = `mutation issueDelete($id: Int!) {
      issueDelete(id: $id)
    }`;
    const { issues } = this.state;
    const {
      location: { pathname, search },
      history,
    } = this.props;
    const { id } = issues[index];
    const data = await graphQLFetch(query, { id });
    if (data && data.issueDelete) {
      this.setState((prevState) => {
        const newList = [...prevState.issues];
        if (pathname === `/issues/${id}`) {
          history.push({ pathname: "/issues", search });
        }
        newList.splice(index, 1);
        return { issues: newList };
      });
      this.showSuccess(`Deleted issue ${id} successfully.`);
    } else {
      this.loadData();
    }
  }

  showSuccess(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: "success",
    });
  }

  showError(message) {
    this.setState({
      toastVisible: true,
      toastMessage: message,
      toastType: "danger",
    });
  }

  dismissToast() {
    this.setState({ toastVisible: false });
  }

  render() {
    const { issues } = this.state;
    if (issues == null) return null;
    const { match } = this.props;
    const { toastVisible, toastType, toastMessage } = this.state;
    return (
      <React.Fragment>
        <Panel>
          <PanelHeading>
            <PanelTitle toggle>Filter</PanelTitle>
          </PanelHeading>
          <Panel.Body collapsible>
            <IssueFilter />
          </Panel.Body>
        </Panel>

        <IssueTable
          issues={issues}
          closeIssue={this.closeIssue}
          deleteIssue={this.deleteIssue}
        />

        <Route path={`${match.path}/:id`} component={IssueDetail} />
        <Toast
          showing={toastVisible}
          onDismiss={this.dismissToast}
          bsStyle={toastType}
        >
          {toastMessage}
        </Toast>
      </React.Fragment>
    );
  }
}
