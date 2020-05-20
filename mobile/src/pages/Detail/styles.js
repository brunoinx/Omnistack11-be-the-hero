import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 15
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  incidentDetails: {
    marginTop: 32,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 24
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380'
  },

  contact: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16
  },

  title:{
    fontSize: 22,
    marginTop: 10,
    marginBottom: 16,
    color: '#13131a',
    fontWeight: 'bold',
    lineHeight: 30
  },
  
  subTitle:{
    fontSize: 15,
    color: '#737380',
  },

  actions:{
    marginTop: 16,
    flexDirection:'row',
    justifyContent: 'space-between',
  },

  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center'
  },

  actionText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  }
});