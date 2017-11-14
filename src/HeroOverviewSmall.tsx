import * as React from "react";
import {PopupState} from "./PopupState";
import {Hero} from "./ProfileState";
import {Column, Row} from "./config/styles";
import {Avatar} from "./Avatar";
import {HeroEquipment} from "./HeroEquipment";
import {HeroSkills} from "./HeroSkills";
import {StatsText} from "./StatsText";
import {StatsInfo, StatsModSource} from "./StaticState";

export class HeroOverviewSmall extends React.Component<{
  popups: PopupState,
  hero: Hero
}> {
  render () {
    const hero = this.props.hero;
    const popups = this.props.popups;
    return (
      <div>
        <Row>
          <Avatar src={hero.classInfo.avatarUrl}/>
          <Column>
            <span>{hero.name}</span>
            <span>{hero.classInfo.name}</span>
            <span>{hero.affliction.name}</span>
          </Column>
          <HeroSkills popups={this.props.popups}/>
        </Row>
        <Row>
          <Column>
            <div>HP: 22/22</div>
            <div>Stress: {hero.stress}/{hero.stressMax}</div>

            <StatsText popups={popups} stats={new StatsInfo("ACC", "ACCURACY", 0)}/>
            <StatsText popups={popups} stats={
              new StatsInfo("CRIT", "CRITICAL CHANCE", 0.025, [
                {percentages: -0.1, source: StatsModSource.Affliction},
                {percentages: 0.15, source: StatsModSource.Item},
                {units: 0.05, source: StatsModSource.Quirk}
              ], true)
            }/>
            <StatsText popups={popups} stats={
              new StatsInfo("DMG", "DAMAGE", [3, 7])
            }/>
          </Column>
          <HeroEquipment popups={popups} hero={hero}/>
        </Row>
      </div>
    );
  }
}
