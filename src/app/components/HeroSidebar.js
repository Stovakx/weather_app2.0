import React from "react";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import CityPicker from "./cityPicker";
export default function HeroSidebar() {
  return (
    <Card className="bg-white max-w-4xl p-2">
      <Text className="text-5xl md:text-4xl lg:text-5xl font-bold text-center mb-10">Weather AI</Text>
      <Subtitle className="text-xl text-center">
        Povered by OpenAi, Next.js, Tailwind CSS, Tremor and more!
      </Subtitle>
      <Divider className="my-10  bg-[#394F68]" />
      <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E] rounded-lg">
        <CityPicker />
      </Card>
    </Card>
  );
}
