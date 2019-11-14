/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";

import Card from "../Components/Card/Card";

import Button from "../Components/CustomButton/CustomButton";

class Icons extends Component {
  render() {
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                hCenter
                title="Forcastly PRO"
                category="Are you looking for more Resources? Please check our Premium Version of Forcastly."
                ctTableResponsive
                ctTableFullWidth
                ctTableUpgrade
                content={
                  <Table>
                    <thead>
                      <tr>
                        <th />
                        <th className="text-center">Free</th>
                        <th className="text-center">PRO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Sku's</td>
                        <td>1000</td>
                        <td>Unlimited</td>
                      </tr>
                      <tr>
                        <td>Integration</td>
                        <td>N/A</td>
                        <td>Amazon, eBay, Walmart, Shopify, Magento, Shipstation</td>
                      </tr>
                      <tr>
                        <td>Users</td>
                        <td>2</td>
                        <td>Unlimited</td>
                      </tr>
                      <tr>
                        <td>Reports</td>
                        <td>
                          <i className="fa fa-check text-success" />
                        </td>
                        <td>
                          <i className="fa fa-check text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>Premium Support</td>
                        <td>
                          <i className="fa fa-times text-danger" />
                        </td>
                        <td>
                          <i className="fa fa-check text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td />
                        <td>Free</td>
                        <td>Just $38</td>
                      </tr>
                      <tr>
                        <td />
                        <td>
                          <Button
                            href="#"
                            round
                            fill
                            disabled
                            bsStyle="default"
                          >
                            Current Version
                          </Button>
                        </td>
                        <td>
                          <Button
                            target="_blank"
                            href="mailto:info@forcastly.com"
                            round
                            fill
                            bsStyle="info"
                          >
                            Upgrade to PRO
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Icons;
