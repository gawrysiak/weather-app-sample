import * as React from 'react';
import { Card, Icon } from 'antd';

type Props = {
  data: {
    name: string,
    temperature: number,
    tempMin: number,
    tempMax: number,
    humidity: number,
    pressure: number,
  }
}

class Widget extends React.Component<Props> {
  render(): Card {
    return (
      <Card
        title={this.props.data.name}
        actions={[
          <Icon type="reload" />,
          <Icon type="delete" />,
        ]}
      >
        <p>
          Temp: {this.props.data.temperature}&#8451;<br />
          <small>{this.props.data.tempMin}&#8451; - {this.props.data.tempMax}&#8451;</small>
        </p>

        <p>Humidity: {this.props.data.humidity}</p>
        <p>Pressure: {this.props.data.pressure}</p>
      </Card>
    );
  }
}

export default Widget;
