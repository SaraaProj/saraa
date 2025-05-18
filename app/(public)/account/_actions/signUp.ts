"use server";
import { getServerSession } from "next-auth";
import { getMergedSessionServer } from "@/middleware";

const signUp = async (formData: FormData) => {
    const session = await getServerSession();
    if (!session) return;
    const { user } = await getMergedSessionServer(session);
    try {
        // ユーザー情報を更新
        await db
          .update(users)
          .set({
            name: nickname,
            birthDate: new Date(birthday),
            gender: gender as "male" | "female",
            job: Array.from(job)[0],
            status: "completed",
          })
          .where(eq(users.email, session?.user?.email!));
  
        // ホームページにリダイレクト
        router.push("/");
      } catch (error) {
        console.error("Error updating user:", error);
      }
}

export { signUp };
