import React from "react";
import Image from "next/image";
import AllMatches1 from "../../public/allMatches/all-matches-img.png";
import AllMatches from "../../public/allMatches/all-matches-img.png";
import ProfileCover from "../../public/allMatches/profile-cover.png";
import ProfilePic from "../../public/allMatches/profile-pic.png";

import Advertisement01 from "../../public/allMatches/ads/ad1.png";
import Advertisement02 from "../../public/allMatches/ads/ad2.png";
import Advertisement03 from "../../public/allMatches/ads/ad3.png";
import Advertisement04 from "../../public/allMatches/ads/ad4.png";

import Advertisement02_01 from "../../public/allMatches/ads/02ad1.png";
import Advertisement02_02 from "../../public/allMatches/ads/02ad2.png";

export default function page() {
  return (
    <div>
      {" "}
      <div className="">
        <section>
          <div className="relative flex items-center justify-center">
            <Image
              src={AllMatches}
              alt="Main Image"
              width={1920}
              height={312}
              className="rounded-lg"
            />
            {/* <img
              src={AllMatches}
              alt="All matches img"
              className="w-full object-scale-down"
            /> */}

            <div className="absolute text-center">
              <p className="text-[48px] text-[#fff] font-bold">
                The biggest and most trusted Matrimony service for Tamils!
              </p>
              <p className="text-[16px] text-[#fff] font-medium">
                Register on TamilMatrimony.com for free by providing necessary
                details. You can also register for free by downloading the Tamil
                <br></br>
                Matrimony app from Play Store.Register on TamilMatrimony.
              </p>
            </div>
          </div>

          <div className="container mx-auto mt-[-25px]">
            <div className="bg-[#FFFFFF] drop-shadow-lg mb-12 flex gap-12 items-center justify-center py-3 rounded-lg px-10 text-[#6A6868] text-[20px]">
              <p>All Matches</p>
              <p>newly Joined</p>
              <p>Nearby Matches</p>
              <p>Viewed You</p>
              <p>Shortlisted You</p>
              <p>Viewed By You</p>
              <p>Shortlisted By You</p>
              <p>More</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3 ">01</div>

          <div className="col-span-6 ">
            <section>
              {/* profile 01 starts here */}
              <div className="mb-16">
                <div className="flex items-center justify-center ">
                  <Image
                    src={ProfileCover}
                    alt="Main Image"
                    width={776}
                    height={102}
                    className="rounded-lg"
                  />
                </div>
                <div className="">
                  <div className="flex items-center justify-center mt-[-50px]">
                    <div className="rounded-lg w-[700px] bg-[#fff] bg-opacity-80 drop-shadow-md px-8">
                      <div className="flex justify-end">
                        <div>
                          <p className="text-[10px] text-[#445159] font-bold pt-3 mb-2">
                            Interested in her?
                          </p>
                          <p className="text-[8px] text-[#fff] font-bold bg-[#5BACE3] w-[80px] px-2 py-1 rounded-md text-center mb-2">
                            Send Interest
                          </p>
                          <p className="text-[8px] text-[#5BACE3] font-bold  w-[80px] px-2 py-1 border-2 border-[#5BACE3] rounded-md text-center">
                            Dont Show
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-center mt-[-120px]">
                        <div className="border-[4px] border-[#5BACE3] w-[110px] h-[110px] rounded-full relative">
                          <Image
                            src={ProfilePic}
                            alt="Main Image"
                            width={106}
                            height={106}
                            className="rounded-lg"
                          />

                          <div className="w-[15px] h-[15px] bg-[#36D21D] rounded-full absolute bottom-[6px] right-[8px]"></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-[13px] text-[#000] font-bold mt-1">
                            Granthali Ramteke
                          </p>
                          <p className="text-[7px] text-[#A6A2A2] font-normal">
                            M9574643 | Last seen few week ago
                          </p>

                          <div className="text-[9px] text-[#445159] font-normal flex items-center gap-3 mt-1">
                            <p>22 Yrs {""} |</p>
                            <p> 5’2” |</p>
                            <p>Others |</p>
                            <p>B.A |</p>
                            <p>Teaching/Acadamian</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* profile 01 ends here */}
            </section>
          </div>

          <div className="col-span-3">
            {/* Side ADS starts here */}
            <section>
              {/* first Advertisement start */}
              <div className="bg-[#fff] shadow-lg mx-12 mb-8 w-[300px] rounded-lg p-4 drop-shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Image
                    src={Advertisement01}
                    alt="Main Image"
                    className="rounded-lg"
                  />
                  <div>
                    <Image
                      src={Advertisement02}
                      alt="Main Image"
                      className="rounded-lg"
                    />
                    <Image
                      src={Advertisement03}
                      alt="Main Image"
                      className="rounded-lg"
                    />
                  </div>
                  <Image
                    src={Advertisement04}
                    alt="Main Image"
                    className="rounded-lg"
                  />
                </div>
                <p className="text-[24px] text-[#445159] font-bold mb-2 ">
                  Wedding venues
                </p>
                <p className="text-[12px] text-[#6A6868] font-medium ">
                  t. It mainly express the tone of your special day. If the
                  venue pick that pretty it might be expensive. To help you out,
                  there are some attractive venues you can select according to
                  your budget
                </p>
              </div>
              {/* first Advertisement ends */}

              {/* Second Advertisement start */}

              <div className="bg-[#fff] shadow-lg mx-12 mb-8 w-[300px] rounded-lg p-4 drop-shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div>
                    <Image
                      src={Advertisement02_01}
                      alt="Main Image"
                      className="rounded-lg"
                    />
                    <p className="text-[14px] text-[#445159] font-bold mb-2">
                      Wedding Cake
                    </p>
                    <p className="text-[7px] text-[#6A6868] font-medium">
                      Deciding a wedding venue is<br></br> one of important and
                      <br></br>
                      challenging part. It mainly<br></br> express the tone of
                      your
                    </p>
                  </div>

                  <div>
                    <Image
                      src={Advertisement02_02}
                      alt="Main Image"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
              {/* Second Advertisement ends */}

              {/* Third Advertisement start */}
              <div className="bg-[#fff] shadow-lg mx-12 w-[300px] rounded-lg p-4 drop-shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Image
                    src={Advertisement01}
                    alt="Main Image"
                    className="rounded-lg"
                  />
                  <div>
                    <Image
                      src={Advertisement02}
                      alt="Main Image"
                      className="rounded-lg mb-5"
                    />
                    <Image
                      src={Advertisement03}
                      alt="Main Image"
                      className="rounded-lg"
                    />
                  </div>
                  <Image
                    src={Advertisement04}
                    alt="Main Image"
                    className="rounded-lg"
                  />
                </div>
                <p className="text-[24px] text-[#445159] font-bold mb-2">
                  Wedding venues
                </p>
                <p className="text-[12px] text-[#6A6868] font-medium">
                  Deciding a wedding venue is one of important and challenging
                  part. It mainly express the tone of your special day. If the
                  venue pick that pretty it might be expensive.
                </p>
              </div>
              {/* Third Advertisement ends */}
            </section>
            {/* Side ADS ends here */}
          </div>
        </div>
      </div>
    </div>
  );
}