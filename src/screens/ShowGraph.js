import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useContext} from 'react';
import {Button, List} from 'react-native-paper';
import {LineChart} from 'react-native-chart-kit';
import {AddLabsContext} from '../context/AddLabsContext';
import {GeneralUtil} from '../context/util';
const ShowGraph = () => {
  const {report} = useContext(AddLabsContext);

  console.log('report => ', report);
  const date = report.map(data =>
    GeneralUtil.datetimeFormatter(Date(data.createdAt), 'date'),
  );

  const heading = Object.keys(report[0]).filter(
    data => data !== 'createdAt' && data !== 'id',
  );
  // console.log('date => ', date);
  // console.log('report keys => ');

  return (
    <LinearGradient
      colors={['#0F8F9F', '#0F8F9F', '#7CCFD9', '#ffffff']}
      style={styles.cont}>
      {/* <DrawerNavigator /> */}
      <View style={styles.Logo}>
        <Image
          style={{height: 80, width: 80}}
          source={require('../assets/img/logo1.png')}
        />
      </View>

      <ScrollView>
        <Text style={styles.docText}>GRAPH</Text>

        {/* <View style={{margin: 20}}>
          <List.Accordion
            style={{backgroundColor: '#ECECEC'}}
            title="Select the test">
            <List.Item style={{backgroundColor: '#EFEFEF'}} title="Diabetes" />
            <List.Item style={{backgroundColor: '#EFEFEF'}} title="CBC" />
          </List.Accordion>
          <Button
            style={{marginTop: 20}}
            textColor="#0F8F9F"
            buttonColor="#ECECEC"
            icon="chart-bell-curve-cumulative"
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Graph
          </Button>
        </View> */}
        {report.map((data, index) => {
          const title = heading[index];
          const dataSet = report.map(data => Number(data[title]));
          return (
            <View style={{}}>
              <Text style={styles.ConH}>{title}:</Text>
              <LineChart
                data={{
                  labels: date, //[('January', 'February', 'March', 'April', 'May', 'June')],
                  datasets: [
                    {
                      data: dataSet,
                    },
                  ],
                }}
                width={Dimensions.get('window').width - 40} // from react-native
                height={220}
                // yAxisLabel="$"
                // yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: '#e26a00',
                  backgroundGradientFrom: '#0F8F9F',
                  backgroundGradientTo: '#7CCFD9',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 10) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 10) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                  },
                }}
                bezier
                style={{
                  margin: 10,
                  marginVertical: 30,
                  borderRadius: 16,
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cont: {
    height: '100%',
    padding: 10,
  },
  Logo: {
    alignItems: 'flex-end',
    paddingTop: 15,
  },
  docText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    textAlign: 'left',
    padding: 20,
    marginTop: 20,
  },
  ConH: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    textAlign: 'left',
    paddingLeft: 20,
    fontSize: 15,
  },
});

export default ShowGraph;
