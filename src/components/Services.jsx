import React from 'react'
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      id: 1,
      heading: "Using Abstract",
      paragraph:
        "Abstract lets you manage, version, and document your designs in one place.",
      image:
        "https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png",
    },
    {
      id: 2,
      heading: "Manage your account",
      paragraph:
        "Configure your account settings, such as your email, profile details, and password.",
      image:
        "https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png",
    },
    {
      id: 3,
      heading: "Manage organizations, teams, and projects",
      paragraph:
        "Use Abstract organizations, teams, and projects to organize your people and your work.",
      image:
        "https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png",
    },
    {
      id: 4,
      heading: "Manage billing",
      paragraph: "Change subscriptions and payment details.",
      image:
        "https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png",
    },
    {
      id: 5,
      heading: "Authenticate to Abstract",
      paragraph:
        "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
      image:
        "https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png",
    },
    {
      id: 6,
      heading: "Abstract support",
      paragraph: "Get in touch with a human.",
      image:
        "https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png",
    },
  ];
  return (
    <div className=" w-screen h-auto flex justify-center gap-16 flex-wrap py-44">
      {services?.map(s => {
        return (
          <ServiceCard key={s.id} {...s} />
        )
      })}
      
    </div>
  );
}

export default Services