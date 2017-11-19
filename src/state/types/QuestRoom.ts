import {Vector} from "./Vector";
import {identifier, list, object, serializable} from "serializr";
import uuid = require("uuid");
import {DungeonInfo} from "./DungeonInfo";
import {Character} from "./Character";
import {generateMonster} from "../Generators";

export type MapLocationId = string;

export class QuestRoom {
  @serializable(identifier()) id: MapLocationId = uuid();
  @serializable(list(object(Character))) monsters: Character[] = [];
  @serializable(object(Vector))
  coordinates: Vector;

  static walk (
    dungeonInfo: DungeonInfo,
    memory: Map<string, QuestRoom> = new Map<string, QuestRoom>(),
    stepsLeft: number = 10,
    coordinates: Vector = new Vector(),
    generatedMonsters: Character[] = []
  ) {
    const roomId = coordinates.id;
    const room = memory.get(roomId) || new QuestRoom();
    room.coordinates = coordinates;
    memory.set(roomId, room);

    if (stepsLeft <= 0) {
      return room;
    }

    const newMonster = generateMonster(dungeonInfo, generatedMonsters);
    generatedMonsters.push(newMonster);
    room.monsters.push(newMonster);

    const direction: Vector = Math.random() > 0.5 ?
      new Vector(Math.random() ? -1 : 1, 0) :
      new Vector(0, Math.random() ? -1 : 1);

    const nextCoordinate = coordinates.add(direction);

    QuestRoom.walk(dungeonInfo, memory, stepsLeft - 1, nextCoordinate, generatedMonsters);

    return room;
  }
}
