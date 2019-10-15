import React, { Component } from "react";
import { connect } from "react-redux";
import ReactModal from "react-modal";
import "./StatusPicker.scss";
class StatusPicker extends Component {
  state = {
    isOpen: false,
    current: null
  };

  handleModalShow = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  getParent = () => {
    return document.querySelector(".order-edit-panel");
  };
  componentDidMount() {
    this.setState({ current: this.props.statusId });
  }
  onSelect = id => {
    this.setState({ isOpen: false });
    this.props.onStatusChange && this.props.onStatusChange(id);
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.statusId !== this.props.statusId) {
      this.setState({ current: this.props.statusId });
    }
  }
  render() {
    const { isOpen, current } = this.state;
    const { statusList, statusId, onStatusChange } = this.props;
    let status = statusList.find(x => x.id === statusId);
    return (
      <>
        <div onClick={this.handleModalShow} className="status-picker">
          <div
            className="status-circle"
            style={{ backgroundColor: status.rgb, transition: 0.2 }}
          ></div>
          <span>{status ? status.name : ""}</span>
        </div>

        <ReactModal
          parentSelector={this.getParent}
          style={{
            overlay: { zIndex: 100, backgroundColor: "rgba(0,0,0,0.2)" },
            content: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
              border: "none"
            }
          }}
          ariaHideApp={false}
          isOpen={isOpen}
        >
          <div className="status-modal-content">
            <div className="modal-content">
              <div className="status-list">
                {statusList.map((statusItem, key) => (
                  <div
                    key={`status-item-${key}`}
                    onClick={() => this.setState({ current: statusItem.id })}
                    className={`status-item ${
                      current && current === statusItem.id ? "active" : ""
                    }`}
                  >
                    <div
                      className="item-icon"
                      style={{ backgroundColor: statusItem.rgb }}
                    ></div>
                    <span className="item-text">{statusItem.name}</span>
                  </div>
                ))}
              </div>
              <div className="content-actions">
                <button
                  disabled={current === statusId}
                  className="common-btn status-save-btn"
                  onClick={() => this.onSelect(current)}
                >
                  Сохранить
                </button>
              </div>
            </div>
          </div>
        </ReactModal>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { statusList: state.orders.statusList };
}

export default connect(
  mapStateToProps,
  {}
)(StatusPicker);
