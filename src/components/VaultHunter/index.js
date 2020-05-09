// import { useReducer } from 'preact/hooks'; // Downgraded from Preact 10 for compat with @pwa/cli
import { Component } from 'preact';
import Skill from '@components/Skill';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
import { getHash, setHash } from './hashHandler';
import reducer from './reducer';
import { getLevel } from './selectors';
import style from './index.css';

function contextKiller (event) {
  event.preventDefault();
  return false;
}

export default class VaultHunter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      invested: [0, 0, 0],
      skills: props.skills || {},
    };
  }

  componentDidMount () {
    this.setState(reducer(this.state, {
      type: 'loadSkills',
      skills: getHash(this.state.skills),
    }));
  }

  render ({
    name = 'Unnamed',
    discipline = 'Classless',
    path,
    skills: initialSkills,
  }) {
    const skillChangeListenerFactory = (skillIndex, treeIndex, treeName, tierIndex) => {
      return (oldValue, newValue) => {
        this.setState(reducer(this.state, {
          type: 'skillChange',
          skillIndex,
          treeIndex,
          treeName,
          tierIndex,
          newValue,
          oldValue,
        }));
      };
    };

    const resetSkills = () => {
      setHash(initialSkills);
      this.setState({
        invested: [0, 0, 0],
        skills: initialSkills || {},
      });
    };

    const trees =
      Object.keys(this.state.skills).map((treeName, treeIndex) => {
        return (
          <div class={`${style.tree} ${[style.green, style.blue, style.red][treeIndex]}`}>
            <style>{`.${style.tree}:nth-child(${treeIndex + 1}) { --invested: ${this.state.invested[treeIndex]}; --treeindex: ${treeIndex};}`}</style>
            <h2 class={style.treeName}>{ treeName }</h2>
            <div class={style.skills}>
              { Object.entries(this.state.skills[treeName]).map(([tierIndex, tier]) => (
                <div class={style.tier}>
                  { Object.entries(tier).map(([skillIndex, skill]) => {
                    return skill ? (
                      <Skill
                        {...skill}
                        enabled={this.state.invested[treeIndex] >= 5 * tierIndex - 5}
                        level={getLevel(this.state)}
                        image={`../../assets/hunters/${discipline}/${treeIndex}${tierIndex}${skillIndex}.png`}
                        onChange={skillChangeListenerFactory(skillIndex, treeIndex, treeName, tierIndex)}
                      />
                    ) : (
                      <div class={style.space} />
                    );
                  }) }
                </div>
              )) }
            </div>
          </div>
        );
      });

    const level = getLevel(this.state);

    return (
      <div>
        <div class={style.header}>
          <h1 class={style.title}>{ name }
            <div class={style.subtitle}>the { discipline }</div>
          </h1>
          <div class={style.sidepanel}>
            <div class={style.level}>Level { level }</div>
            <div class={style.reset}><a onClick={resetSkills}>Reset</a></div>
          </div>
          <Nav path={path} />
        </div>
        <main>
          <div class={style.VaultHunter} onContextMenu={contextKiller}>
            <div class={style.trees}>
              { trees }
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
