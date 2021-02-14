import React from "react";
import { View, ScrollView } from "react-native";
import { Layout, Text } from '@ui-kitten/components';
import WebView from 'react-native-webview';
//import Error404 from "../error404.js"

export default class CodeOfConduct extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <Layout style = { {
        flex: 1,
        justifyContent: 'center',
        padding: 10
      } } >
        <View style = { {
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center'
        } } >
          <Text category = "s2">Health & Safety Policy</Text>
        </View>
        <ScrollView>
          <View>
            <Text>
              {`The Health and Safety Policy is intended to provide a practical framework for the
                implementation of the Health and Safety at Work Act 1974 and all relevant legislation which
                establishes the minimum standards.\n
                The Nagar (City/Area) Karyawaha (Secretary) and/or Shakha Karyawaha (Branch Secretary)
                will be responsible for the implementation of the Health and Safety Policy of HSS (UK) at
                their local shakhas (branches).\n
                We recognise that it is unlikely that this policy will be successful unless it actively involves all
                volunteers, service users and other persons likely to be affected by our work.\n
                It is the duty of every Swayamsevak/Sevika (member) to take reasonable care for the health
                and safety of themselves, their fellow Swayamsevaks/Sevikas or any third party who may be
                affected by their actions at work and to co-operate fully to enable us to carry out
                responsibilities for health and safety successfully.\n`}
            </Text>
            <Text>It is our policy, so far as reasonably practicable, to:</Text>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>Ensure the maintenance of sites, buildings and work equipment to a reasonably safe
                  level.</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>Comply with legal requirements, Codes of Practice and safe working procedures.</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>Ensure the maintenance of sites, buildings and work equipment to a reasonably safe
                  level.</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>Comply with legal requirements, Codes of Practice and safe working procedures.</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>Promote a safe working culture, which positively encourages safe working in all
                  aspects of our work.</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`Provide where necessary, appropriate information, instruction, training and\n
                  supervision to ensure as far as practicable the health and safety of all\n
                  Swayamsevaks/Sevikas, service users and third parties.`}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`Encourage compliance with all Policy arrangements, safety rules, and regulations\n
                    through discussion, consultation and communication.`}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`Provide relevant health and safety information to Swayamsevaks/Sevikas,\n
                    Karyakartas and user groups.`}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`Provide and maintain a suitable accident reporting procedure, encourage and\n
                    promote the reporting of accidents, and facilitate appropriate subsequent investigation.`}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`Consider at planning and contract stages means of\n
                    eliminating/reducing risk of injury and damage.`}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`Liaise with the Health and Safety Executive, Government Departments, and other\n
                    relevant external agencies as appropriate.`}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`Provide and maintain a suitable accident reporting procedure, encourage and\n
                    promote the reporting of accidents, and facilitate appropriate subsequent investigation.`}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`Ensure the safe handling, storage\n and transport of equipment and other materials.`}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`Formulate effective procedures for use in the event of fire and other emergencies.`}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`Ensure that this Policy and any Code of Practice/Guidance resulting from it are kept\n
                    under regular review.`}</Text>
              </View>

          </View>
          <View style = { {
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center'
          } } >
            <Text>Approval Date: 15th September 2019</Text>
          </View>

        </ScrollView>
      </Layout>
    );
  }
}
