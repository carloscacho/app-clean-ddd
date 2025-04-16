import { v4 as uuid } from "uuid";

/**
 * classe controladora  de IDs
 */
export default class Id {

  /**
   * gera novos ids com uuid v4
   * @returns id criado
   */
  static novoHash(): string {
    return uuid();
  }

}


console.log(Id.novoHash())