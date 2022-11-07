import { CommonActions, StackActions } from '@react-navigation/native';

function useNavigationService(navigation = null, routeName = null){

  const init = () => {
    // if (this._navigation) {
    //   return;
    // }
    navigation = navigation
  }

  const destroy = () => {
    navigation = null
  }

  const getState = () => navigation.state

  const onReady = () =>  {
    routeName = navigation.getCurrentRoute().name;
  }

  const navigate = (name, params) => {
    navigation.dispatch(
      CommonActions.navigate({
        name,
        params,
      }),
    );
  }

  const push = (name, params) => {
    navigation.dispatch(StackActions.push(name, params));
  }

  const replace = (name, params) => {
    navigation.dispatch(StackActions.replace(name, params));
  }

  const goBack = () =>  {
    navigation.dispatch(CommonActions.goBack());
  }

  return {navigate}
}


export {useNavigationService}
