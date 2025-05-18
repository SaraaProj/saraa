"use client";
import { RadioGroup } from "@heroui/react";
import { CustomButton } from "@/components/Button";
import { FaFemale, FaMale } from "react-icons/fa";
import { CustomInput } from "@/components/Input";
import { useState } from "react";
import { FaUser, FaBirthdayCake, FaBriefcase } from "react-icons/fa";
import { SquareRadio } from "@/components/SquareRadio";
import { CustomSelect } from "@/components/Select";
import { useSession } from "next-auth/react";
import { signUp } from "./_actions/signUp";
import Link from "next/link";

export default function SignUpPage() {
  const { data: session, status } = useSession();
  const [nickname, setNickname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [job, setJob] = useState<Set<string>>(new Set([]));

  if (status === "authenticated" && session) {
    return (
      <>
        <div>
          <div
            className="flex flex-col h-full items-center justify-between px-4 py-12"
            style={{ minHeight: "100vh" }}
          >
            <Link href="/">ホームへ</Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        console.log(e);
        const formData = new FormData(e.target as HTMLFormElement);
        // signUp(formData);
      }}
      className="flex flex-col h-full items-center justify-between px-4 py-12"
      style={{ minHeight: "100vh" }}
    >
      <div className="max-h-full overflow-y-auto">
        <h1 className="text-2xl font-bold text-center mb-12">アカウント作成</h1>

        {/* ニックネーム */}
        <CustomInput
          isRequired
          size="lg"
          label="ニックネーム"
          labelPlacement="outside"
          placeholder="ニックネームを入力"
          startContent={<FaUser className="inline" />}
          value={nickname}
          onValueChange={setNickname}
          className="py-4"
        />

        {/* 生年月日 */}
        <CustomInput
          isRequired
          size="lg"
          label="生年月日"
          labelPlacement="outside"
          placeholder="生年月日を選択してください"
          startContent={<FaBirthdayCake />}
          type="date"
          value={birthday}
          onValueChange={setBirthday}
          className="py-4"
        />

        {/* 性別 */}
        <div className="my-4">
          <RadioGroup
            label="性別"
            isRequired
            orientation="horizontal"
            value={gender}
            onValueChange={setGender}
          >
            <SquareRadio value="male" color="primary">
              <FaMale className="inline text-primary mr-2" />
              男性
            </SquareRadio>
            <SquareRadio value="female" color="danger">
              <FaFemale className="inline text-danger mr-2" />
              女性
            </SquareRadio>
          </RadioGroup>
        </div>

        {/* 職業 */}
        <CustomSelect
          isRequired
          size="lg"
          label="職業"
          labelPlacement="outside"
          placeholder="職業を選択してください"
          startContent={<FaBriefcase />}
          selectedKeys={job}
          options={[
            { key: "student", label: "小学生" },
            { key: "junior", label: "中学生" },
            { key: "high", label: "高校生" },
            { key: "university", label: "大学生" },
            { key: "worker", label: "会社員" },
            { key: "freelancer", label: "個人事業主" },
            { key: "other", label: "その他" },
          ]}
          onSelectionChange={(keys) => {
            if (typeof keys === "object" && keys.currentKey) {
              setJob(new Set([keys.currentKey]));
            }
          }}
          className="py-8"
          children={null}
        />
      </div>
      <div className="w-full max-w-md rounded-3xl px-6">
        {/* 作成ボタン */}
        <CustomButton
          type="submit"
          color="primary"
          size="lg"
          radius="full"
          className="bg-primary text-white  w-full sm:w-64 md:w-96 py-3 mt-2 shadow-md cursor-pointer"
        >
          作成してはじめる
        </CustomButton>
      </div>
    </form>
  );
}
