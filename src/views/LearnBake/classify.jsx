import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import '../../assets/style/viewsStyle/LearnBake/classify.css'
export default class Index extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        const tabs = [
            { title: '1 Tab', key: 't1' },
            { title: '2 Tab', key: 't2' },
            { title: '3 Tab', key: 't3' },
            { title: '4 Tab', key: 't4' },
            { title: '5 Tab', key: 't5' },
            { title: '6 Tab', key: 't6' },
            { title: '7 Tab', key: 't7' },
            { title: '8 Tab', key: 't8' },
            { title: '9 Tab', key: 't9' },
            { title: '10 Tab', key: 't10' },
          ];
          const TabExample = () => (
            <div style={{ height: 800 }}>
              <WhiteSpace />
              <Tabs tabs={tabs}
                initialPage={'t2'}
                tabBarPosition="left"
                tabDirection="vertical"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                  Content of first tab
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                  Content of second tab
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                  Content of third tab
                </div>
              </Tabs>
              <WhiteSpace />
            </div>
          );
          return(
              <TabExample></TabExample>
          )
        
    }
    componentDidMount() {

    }
}