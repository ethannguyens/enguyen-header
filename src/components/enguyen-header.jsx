import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "../styles/enguyen-header.css";
import messages from "../lang/default-messages";

export default class EnguyenHeader extends React.Component {
  render() {
    return (
      <div className={styles.someStyle}>
        <FormattedMessage {...messages.editMe} />
      </div>
    );
  }
}

EnguyenHeader.displayName = "EnguyenHeader";

EnguyenHeader.propTypes = {};

EnguyenHeader.defaultProps = {};
