import * as React from 'react';
import { connect } from 'react-redux';
import { Layout, Input, Row, Col, Divider } from 'antd';
import Content from 'components/Layout/Content';
import Widget from 'components/Widget';
import H1 from 'components/Layout/H1';
import { searchWeather } from './store/actions';

const { Header } = Layout;

class Weather extends React.Component<Props> {
  static defaultProps = {
    items: [],
  };

  handleChange = (event: SyntheticKeyboardEvent<EventTarget>) => {
    this.props.searchWeather(event.target.value);
  }

  render(): Node {
    return (
      <Layout>
        <Header>
          <H1>React Weather App</H1>
        </Header>
        <Content>
          <Input
            placeholder="Search..."
            onKeyUp={this.handleChange}
            defaultValue={this.props.query}
          />
          <Divider />
          <Row gutter={16}>
            {this.props.items.map((item: WeatherRow): Node => (
              <Col span={4}>
                <Widget
                  key={item.id}
                  data={item}
                />
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = (state): Props => ({
  query: state.weather.query,
  items: state.weather.items,
});

const mapDispatchToProps = (dispatch): Props => ({
  searchWeather: (query: string): void => dispatch(searchWeather(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
