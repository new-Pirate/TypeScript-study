interface Rad {
  sum: number;
  from: number;
  to: number;
}

enum Payment {
  Success = 'success',
  Failed = 'failed',
}
interface Success extends Rad {
  databaseId: number;
}

interface Failed {
  errorMe: string;
  errorCode: string;
}

interface ResponceSuccess {
  status: Payment.Success;
}

interface ResponceFailed {
  status: Payment.Failed;
}