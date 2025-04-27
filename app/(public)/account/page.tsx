"use client";
import { Input, RadioGroup, Radio, Button } from "@heroui/react";
import { CustomButton } from "@/components/Button";
import { signUp } from "./actions/signUp";
import { useState } from "react";
import { FaUser, FaBirthdayCake, FaBriefcase } from "react-icons/fa";

export default function SignUpPage() {
  const [nickname, setNickname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [job, setJob] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでバリデーションやAPI送信など
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full items-center justify-between px-4 py-12"
      style={{ minHeight: '100vh' }}
    >
      <div
        className='max-h-full overflow-y-auto'
      >
        <h1 className="text-2xl font-bold text-center mb-8">アカウント作成</h1>

        {/* ニックネーム */}
        <Input
          isRequired
          label="ニックネーム"
          placeholder="ニックネームを入力"
          startContent={<FaUser />}
          value={nickname}
          onValueChange={setNickname}
          className="mb-6"
        />

        {/* 生年月日 */}
        <Input
          isRequired
          label="生年月日"
          placeholder="生年月日を選択してください"
          startContent={<FaBirthdayCake />}
          type="date"
          value={birthday}
          onValueChange={setBirthday}
          className="mb-6"
        />

        {/* 性別 */}
        <div className="mb-6">
          <label className="block font-bold mb-2">
            性別<span className="text-danger">*</span>
          </label>
          <RadioGroup
            orientation="horizontal"
            value={gender}
            onValueChange={setGender}
          >
            <Radio value="male" color="primary">
              男性
            </Radio>
            <Radio value="female" color="danger">
              女性
            </Radio>
          </RadioGroup>
        </div>

        {/* 職業 */}
        <Input
          isRequired
          label="職業"
          placeholder="職業を選択してください"
          startContent={<FaBriefcase />}
          value={job}
          onValueChange={setJob}
          className="mb-8"
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
