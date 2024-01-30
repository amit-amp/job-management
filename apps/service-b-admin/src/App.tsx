import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { ProjectUserList } from "./projectUser/ProjectUserList";
import { ProjectUserCreate } from "./projectUser/ProjectUserCreate";
import { ProjectUserEdit } from "./projectUser/ProjectUserEdit";
import { ProjectUserShow } from "./projectUser/ProjectUserShow";
import { ProjectInviteList } from "./projectInvite/ProjectInviteList";
import { ProjectInviteCreate } from "./projectInvite/ProjectInviteCreate";
import { ProjectInviteEdit } from "./projectInvite/ProjectInviteEdit";
import { ProjectInviteShow } from "./projectInvite/ProjectInviteShow";
import { TestList } from "./test/TestList";
import { TestCreate } from "./test/TestCreate";
import { TestEdit } from "./test/TestEdit";
import { TestShow } from "./test/TestShow";
import { OptionList } from "./option/OptionList";
import { OptionCreate } from "./option/OptionCreate";
import { OptionEdit } from "./option/OptionEdit";
import { OptionShow } from "./option/OptionShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { FeatureFlagList } from "./featureFlag/FeatureFlagList";
import { FeatureFlagCreate } from "./featureFlag/FeatureFlagCreate";
import { FeatureFlagEdit } from "./featureFlag/FeatureFlagEdit";
import { FeatureFlagShow } from "./featureFlag/FeatureFlagShow";
import { FeatureFlagValueList } from "./featureFlagValue/FeatureFlagValueList";
import { FeatureFlagValueCreate } from "./featureFlagValue/FeatureFlagValueCreate";
import { FeatureFlagValueEdit } from "./featureFlagValue/FeatureFlagValueEdit";
import { FeatureFlagValueShow } from "./featureFlagValue/FeatureFlagValueShow";
import { FeatureFlagHistoryList } from "./featureFlagHistory/FeatureFlagHistoryList";
import { FeatureFlagHistoryCreate } from "./featureFlagHistory/FeatureFlagHistoryCreate";
import { FeatureFlagHistoryEdit } from "./featureFlagHistory/FeatureFlagHistoryEdit";
import { FeatureFlagHistoryShow } from "./featureFlagHistory/FeatureFlagHistoryShow";
import { CouponCodeList } from "./couponCode/CouponCodeList";
import { CouponCodeCreate } from "./couponCode/CouponCodeCreate";
import { CouponCodeEdit } from "./couponCode/CouponCodeEdit";
import { CouponCodeShow } from "./couponCode/CouponCodeShow";
import { ApiKeyList } from "./apiKey/ApiKeyList";
import { ApiKeyCreate } from "./apiKey/ApiKeyCreate";
import { ApiKeyEdit } from "./apiKey/ApiKeyEdit";
import { ApiKeyShow } from "./apiKey/ApiKeyShow";
import { ApiRequestList } from "./apiRequest/ApiRequestList";
import { ApiRequestCreate } from "./apiRequest/ApiRequestCreate";
import { ApiRequestEdit } from "./apiRequest/ApiRequestEdit";
import { ApiRequestShow } from "./apiRequest/ApiRequestShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"service-b"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="ProjectUser"
          list={ProjectUserList}
          edit={ProjectUserEdit}
          create={ProjectUserCreate}
          show={ProjectUserShow}
        />
        <Resource
          name="ProjectInvite"
          list={ProjectInviteList}
          edit={ProjectInviteEdit}
          create={ProjectInviteCreate}
          show={ProjectInviteShow}
        />
        <Resource
          name="Test"
          list={TestList}
          edit={TestEdit}
          create={TestCreate}
          show={TestShow}
        />
        <Resource
          name="Option"
          list={OptionList}
          edit={OptionEdit}
          create={OptionCreate}
          show={OptionShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="FeatureFlag"
          list={FeatureFlagList}
          edit={FeatureFlagEdit}
          create={FeatureFlagCreate}
          show={FeatureFlagShow}
        />
        <Resource
          name="FeatureFlagValue"
          list={FeatureFlagValueList}
          edit={FeatureFlagValueEdit}
          create={FeatureFlagValueCreate}
          show={FeatureFlagValueShow}
        />
        <Resource
          name="FeatureFlagHistory"
          list={FeatureFlagHistoryList}
          edit={FeatureFlagHistoryEdit}
          create={FeatureFlagHistoryCreate}
          show={FeatureFlagHistoryShow}
        />
        <Resource
          name="CouponCode"
          list={CouponCodeList}
          edit={CouponCodeEdit}
          create={CouponCodeCreate}
          show={CouponCodeShow}
        />
        <Resource
          name="ApiKey"
          list={ApiKeyList}
          edit={ApiKeyEdit}
          create={ApiKeyCreate}
          show={ApiKeyShow}
        />
        <Resource
          name="ApiRequest"
          list={ApiRequestList}
          edit={ApiRequestEdit}
          create={ApiRequestCreate}
          show={ApiRequestShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
      </Admin>
    </div>
  );
};

export default App;
