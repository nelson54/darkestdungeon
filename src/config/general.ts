import {AmbienceDefinition} from "../AmbienceState";
import {CharacterClass} from "../ProfileData";

export const ambience = {
  "estate": new AmbienceDefinition(
    {src: require("../../assets/dd/audio/amb_town_gen_base.wav")},
    [
      {src: require("../../assets/dd/audio/amb_town_gen_base_os_01.wav")},
      {src: require("../../assets/dd/audio/amb_town_gen_base_os_02.wav")},
      {src: require("../../assets/dd/audio/amb_town_gen_base_os_03.wav")}
    ]
  ),
  "coach": "estate",
  "tavern": new AmbienceDefinition(
    {src: require("../../assets/dd/audio/amb_town_tavern.wav")},
    [
      {src: require("../../assets/dd/audio/amb_town_tavern_os_bar_01.wav")},
      {src: require("../../assets/dd/audio/amb_town_tavern_os_bar_02.wav")},
      {src: require("../../assets/dd/audio/amb_town_tavern_os_bar_03.wav")},
      {src: require("../../assets/dd/audio/amb_town_tavern_os_chair_01.wav")},
      {src: require("../../assets/dd/audio/amb_town_tavern_os_chair_02.wav")},
      {src: require("../../assets/dd/audio/amb_town_tavern_os_chair_03.wav")}
    ]
  ),
};

export const characterNames = ["Foo", "Bar", "Baz", "LoL", "OMG"];

export const characterClasses = [
  new CharacterClass("Mod"),
  new CharacterClass("Pleb")
];
