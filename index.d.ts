// Type definitions for @condenast/quick-bus 0.3
// Project: https://github.com/CondeNast/quick-bus (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Socheat Sok <https://github.com/me>
// Definitions: https://github.com/socheatsok78/quick-bus-types

declare module '@condenast/quick-bus' {
  export type RemoveListener = () => void
  export type History = [string, any]
  export type HistoryGraph = History[]
  export type Meta = { topic: string }

  export default class Bus {
    on(topic: string, cb: (data: any, meta: Meta) => void): RemoveListener
    emit(topic: string, data?: any): void
    subscribe(topic: string, cb: (data: any, meta: Meta) => void): void
    publish(topic: string, data?: any): void
    history(): HistoryGraph
  }
}
