import type { Session } from "next-auth";

export const getMergedSessionServer = async (session: Session) => {
  // 一時的な対処：基本的なセッション情報のみを返す
  return session;
};
