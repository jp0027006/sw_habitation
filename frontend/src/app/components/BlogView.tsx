"use client"
import { BlogViewProps } from "@/types/blog";
import React, { useState } from "react";
import ContentFilter from "./ContentFilter";
import Blogs from "./Blogs";

function BlogView({ contentfilteritems, blogitems }: BlogViewProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogitems);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <ContentFilter
        contentfilteritems={contentfilteritems}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        blogs={blogitems}
        setFilteredBlogs={setFilteredBlogs}
      />
      <section className="pt-[80px] md:pt-[20px] md:pb-[20px]">
        <div className="container xl:pl-32 xl:pr-32 lg:pl-28 lg:pr-28 md:pl-24 md:pr-24 sm:pl-20 sm:pr-20">
          {filteredBlogs.length === 0 ? (
            <div className="text-center w-full m-auto mb-40">
              <h3 className="text-center text-theme-charcolBlue font-semibold text-4xl">
                Data Not Found
              </h3>
            </div>
          ) : (
            <Blogs blogitems={filteredBlogs} />
          )}
        </div>
      </section>
    </div>
  );
}

export default BlogView;
