export interface RequestModel {
  _id: string;
  date: Date;
  method: string;
  endpoint: string;
  responseData?: Record<string, unknown>;
  requestData?: Record<string, unknown>;
  userId?: string | null;
}
