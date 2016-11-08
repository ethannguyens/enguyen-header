/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import EnguyenHeader from "src/components/enguyen-header";

describe("components/enguyen-header", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<EnguyenHeader />);
      expect(component).to.not.be.null;
    });

  });

});
