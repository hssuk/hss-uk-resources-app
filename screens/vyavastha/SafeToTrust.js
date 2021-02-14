import React from "react";
//import { StyleSheet, View, Animated, FlatList, ScrollView, AsyncStorage, Share } from "react-native";
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
          <Text category = "s2">HSS (UK) Safe to Trust Policy</Text>
        </View>
        <ScrollView>
        <View>
        </View>
        <View>
        </View>
        <View>
          <Text>{`It is a privilege to work with children and young people (defined as those under the age of 18); it is also a great responsibility. Parents trust us to look after their children, to care for
them, give leadership, and keep them safe. We need to ensure that we honour their trust.\n
The purpose of this document is:\n`}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>to make sure that children in our care are protected from harm;</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>to respond appropriately should abuse be discovered or disclosed;</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>{`to provide guidance to karyakartas in ensuring situations are minimised where a
karyakarta’s actions could increase the risk of causing safeguarding issues (this last
point is concerned with protecting both children and karyakartas from false
allegations).`}
          </Text>
        </View>
        <View>
        </View>
        <View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Domestic Abuse
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Sexual Abuse
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Neglect
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Physical Abuse
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Online Abuse
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Emotional Abuse
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Child Sexual Exploitation
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Female Genital Mutilation
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Bullying and Cyberbullying
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Child Trafficking
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Grooming
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>Harmful Sexual Behaviours
          </Text>
        </View>
        <View>
          <Text category = "h5">Policy Statement:</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>{`As Swayamsevaks/Sevikas of HSS (UK) we commit ourselves to the protection and safekeeping of all children and young people for whom we care in our activities.`}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>{`It is the responsibility of each one of us to prevent abuse of children and young people and to report any abuse discovered or suspected (see categories of abuse in section 1).`}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>{`We recognise that our work with children and young people is the responsibility of the whole management of HSS (UK).`}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>{`We are committed to the provision of resources for those who work with children and young people and to providing suitable and adequate supervision.`}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5}}>{`ll karyakartas must be familiar with this document and agree to support the principles and guidance in it.`}
          </Text>
        </View>
        <View style = { {
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center'
        } } >
          <Text category = "s2">Policy Statement:</Text>
        </View>
        <View>
          <Text>{`Good Practice Guidelines:\n`}</Text>
          <Text style={{fontSize: 'italic'}}>{`A. Good Practice with Children and Young People:`}</Text>
          <Text>{`We will endeavour to adhere to the following:\n`}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>{'\u2022'}</Text>
              <Text style={{flex: 1, paddingLeft: 5}}>{`this guidance will be available and accessible by local shakhas (branches);`}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>{'\u2022'}</Text>
              <Text style={{flex: 1, paddingLeft: 5}}>{`where a child is under 5 years of age (below primary school year 1), their parent/guardian must be present;`}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>{'\u2022'}</Text>
              <Text style={{flex: 1, paddingLeft: 5}}>{`at least two adults will conduct any children’s and young people’s activity, at least one of whom must be DBS checked;`}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>{'\u2022'}</Text>
              <Text style={{flex: 1, paddingLeft: 5}}>{`if both Swayamsevaks and Sevikas are present (male and female members), there must be at least one male and female adult present;`}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>{'\u2022'}</Text>
              <Text style={{flex: 1, paddingLeft: 5}}>{`as far as possible, a karyakarta will not be alone with a child;`}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>{'\u2022'}</Text>
              <Text style={{flex: 1, paddingLeft: 5}}>{`if privacy or confidentiality is required between a karyakarta and child, another karyakarta should be told, doors should be left open and the karyakarta and child should be checked on periodically. The child should be told about this arrangement;`}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>{'\u2022'}</Text>
              <Text style={{flex: 1, paddingLeft: 5}}>{`access to and from the building should be safe and well lit.`}
              </Text>
            </View>
            <Text>{`This karyakarta will:\n`}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`treat all young people with respect and dignity without discrimination;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`be careful with speech, tone of voice, and body language;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`respect the privacy of children, e.g. when visiting the toilet;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`avoid games whose rules do not prevent the possibility of physical aggression, inappropriate language, inappropriate touching or improper use of technology;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`refrain from any sexually suggestive comments, ridiculing, or rejection of a child or young person, even in fun;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`avoid inappropriate touching of any form; exercise caution if comforting an injured or distressed child;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`avoid all situations where he/she is alone with a group exclusively of the opposite sex; a second karyakarta of the same sex as the group must be present;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`learn to control children without using physical contact, or aggressive or intimidating behaviour;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`make sure another adult is present if, for example, a child has soiled his or her clothes and needs assistance with washing or a change of clothes;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`not let children or young people involve him or her in excessively attention seeking behaviour, especially if it is of an overtly sexual or physical nature;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`not invite a child or young person to his or her home without another adult being present, parental consent and a good reason/rationale for this invitation;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`make sure that parents know where their child is, and obtain written parental consent for non-routine events, such as trips;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`avoid, where possible, giving lifts to individual children; if this is unavoidable, ensure that their parents are aware and have given consent;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`ensure that all child passengers are safely returned to their destination at a time agreed with the parents, and that they are accompanied safely to the premises;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`not provide lifts to passengers exclusively of the opposite sex;`}
                </Text>
              </View>
            <Text style={{fontSize: 'italic'}}>{`B. Good Practice amongst Karyakartas`}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`karyakartas must support each other in their work with children and young people, and encourage and reference the use of these guidelines at all times;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`if karyakartas have a concern about the behaviour or suitability of another karyakarta, they must speak to the shakha karyawaha about the concern; if the concern relates to the shakha karyawaha then speak to the vibhag karyawaha;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`karyakartas must be given the opportunity to meet together to review the work that they have done, and to plan future work;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`the shakha and vibhag karyawaha should take opportunities to observe karyakartas in activities with children and young people, and to discuss what they have observed with the karyakarta;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`karyakartas should accept such observations as part of HSS (UK)’s commitment to safe and high-quality activities with children and young people;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`the shakha/vibhag karyawaha should discuss with karyakartas their role, performance and any concerns they have about their work with children and young people; this is supervision.`}
                </Text>
              </View>
        </View>
        <View style = { {
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center'
        } } >
          <Text category = "s2">Section 3:</Text>
        </View>
        <View>
          <Text>{`The selection of Karyakartas and their responsibilities:\n`}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>{'\u2022'}</Text>
              <Text style={{flex: 1, paddingLeft: 5}}>{`It is not enough to rely on someone’s good reputation to guarantee that they are suitable to work with children and young people.`}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>{'\u2022'}</Text>
              <Text style={{flex: 1, paddingLeft: 5}}>{`Applicants should be vetted by a minimum of two karyakartas of HSS (UK).`}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>{'\u2022'}</Text>
              <Text style={{flex: 1, paddingLeft: 5}}>{`Karyakartas should only be appointed subject to satisfactory disclosure from a DBS check.`}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>{'\u2022'}</Text>
              <Text style={{flex: 1, paddingLeft: 5}}>{`All karyakartas should have access to these guidelines.`}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>{'\u2022'}</Text>
              <Text style={{flex: 1, paddingLeft: 5}}>{`The roles of all karyakartas must be established and clearly explained to them by the shakha/vibhag karyawaha.`}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>{'\u2022'}</Text>
              <Text style={{flex: 1, paddingLeft: 5}}>{`Karyakarta must not be expected to perform duties for which they are not adequately trained or experienced.`}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>{'\u2022'}</Text>
              <Text style={{flex: 1, paddingLeft: 5}}>{`See Karyakarta Development Policy for further information.`}
              </Text>
            </View>

            <View style = { {
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center'
            } } >
              <Text category = "s2">Section 4:</Text>
            </View>
            <View>
              <Text>{`Procedures to follow:\n`}</Text>
              <Text>{`HSS (UK) is committed to the protection of children from harm (see categories of abuse in section 1). In order to achieve this, karyakartas need to value children, and take time to listen to them, when they choose to talk about their experiences and concerns. It is important that karyakartas know how to respond if abuse is disclosed or suspected.`}</Text>
              <Text style={{fontSize: 'italic'}}>{`If abuse is disclosed or suspected:`}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text>{'\u2022'}</Text>
                <Text style={{flex: 1, paddingLeft: 5}}>{`approach the child about your concerns privately, ensuring good practice guidelines are following as noted above;`}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <Text>{'\u2022'}</Text>
                  <Text style={{flex: 1, paddingLeft: 5}}>{`Applicants should be vetted by a minimum of two karyakartas of HSS (UK).`}
                  </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <Text>{'\u2022'}</Text>
                  <Text style={{flex: 1, paddingLeft: 5}}>{`listen to the child and keep a note of what is said, or of what your concerns are;`}
                  </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <Text>{'\u2022'}</Text>
                  <Text style={{flex: 1, paddingLeft: 5}}>{`do not interrupt the child, and try not to ask questions;.`}
                  </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <Text>{'\u2022'}</Text>
                  <Text style={{flex: 1, paddingLeft: 5}}>{`reassure the child, but do not encourage her or him to tell you more;`}
                  </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <Text>{'\u2022'}</Text>
                  <Text style={{flex: 1, paddingLeft: 5}}>{`tell the child that you will have to inform someone else of what has been said, so that action can be taken to make sure that he or she is safe;`}
                  </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <Text>{'\u2022'}</Text>
                  <Text style={{flex: 1, paddingLeft: 5}}>{`do not delay, tell the shakha/event karyawaha about the disclosure or concerns;.`}
                  </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <Text>{'\u2022'}</Text>
                  <Text style={{flex: 1, paddingLeft: 5}}>{`ensure you write down all information provided within the discussion as soon as possible after the discussion`}
                  </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <Text>{'\u2022'}</Text>
                  <Text style={{flex: 1, paddingLeft: 5}}>{`the shakha/event karyawaha is responsible for making sure that the matter is referred to the safeguarding officer, parents/guardians (where appropriate) and statutory authorities (police or social services);.`}
                  </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <Text>{'\u2022'}</Text>
                  <Text style={{flex: 1, paddingLeft: 5}}>{`the details of the concern or disclosure should not be discussed with anyone other than the child, the shakha/event karyawaha, safeguarding officer, parents/guardians (where appropriate) or the statutory authorities;`}
                  </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <Text>{'\u2022'}</Text>
                  <Text style={{flex: 1, paddingLeft: 5}}>{`if the disclosure or concern is about someone who is a swayamsevak/sevika of HSS (UK), this procedure must still be followed (if the shakha/event karyawaha or safeguarding lead is implicated then an alternative safeguarding officer should be informed directly). That person should be suspended from any activities with children and young people at least until the matter has been investigated.`}
                  </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <Text>{'\u2022'}</Text>
                  <Text style={{flex: 1, paddingLeft: 5}}>{`the parents/guardians should be informed of this matter unless informing them would compromise the child’s safety.`}
                  </Text>
              </View>
            </View>
            <View style = { {
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center'
            } } >
              <Text category = "s2">Section 5</Text>
            </View>
            <View>
              <Text>{`Designated Safeguarding Officers\n`}</Text>
              <Text>{`Trained male and female designated safeguarding officers are in place. Contact dbs@hssuk.org for further information.`}</Text>
            </View>
          </View>
        </ScrollView>
      </Layout>
    );
  }
}
