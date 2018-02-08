export interface IEvent {
    timestamp: number;
    sessionId: string;
    eventType: string;
    event: any;
    store: any;
}
