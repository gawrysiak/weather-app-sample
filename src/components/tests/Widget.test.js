import React from 'react';
import renderer from 'react-test-renderer';
import Widget from 'components/Widget';

test('Widget component matches the snapshop', () => {
  const component = renderer.create(
    <Widget data={{
      temperature: 3,
      pressure: 1021,
      humidity: 99,
      tempMin: 1,
      tempMax: 4,
      name: 'Warsaw',
      icon: 'Snow',
    }} />,
  );

  expect(component.toJSON()).toMatchSnapshot();
});
