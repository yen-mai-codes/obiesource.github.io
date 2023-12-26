import React, { useEffect, useState } from "react";
import "./resources-more.css";
import "./../../App.css";

const ResourcesMore = () => {
  const resources = [
    {name: "Obiesource Github slides", 
    src: "https://drive.google.com/file/d/15X0463G8FPsME3MNhICZDjRrpZsog6Tx/view?usp=sharing",
    description: "Slides for Obiesource Github workshop. Includes introduction to version control, Git installation, and Git configuration"},
    
    {name: "Git branch Visualizer", 
    src: "https://learngitbranching.js.org/",
    description: "Learn Git Branching by pacing yourself through interactive game levels."},
    
    {name: "Learn Git in 15 minutes", 
    src: "https://www.youtube.com/watch?v=USjZcfj8yxE&t",
    description: "Learn common Git commands: git add, git commit, git branch, git checkout, and git merge."},
    
    {name: "Godot 2D Game Tutorial", 
    src: "https://www.youtube.com/watch?v=HvPTSZl2WCc",
    description: "In-depth introduction to Godot, a popular game engine."}
  ]
  return (
    <div className="obs__resources-more">
      <div className="obs__resources-more-header">&#123;Recommended Resources&#125;</div>

      <div className="obs__resources-more-flex__container">
        {resources.map((resource, index) => {
          return (
            <div
              className="obs__resources-more-resource animate flip"
              key={resource.name}
              style={{ animationDelay: index * 0.25 + "s" }}
            >
              <div className="obs__resources-more-resource-heading">
                <div className="obs__resources-more-resource-heading-title">
                  <a href={resource.src}>{resource.name}</a>
                </div>
              </div>
              <div className="obs__resources-more-resource-heading-description">
                {resource.description != null
                    ? resource.description
                  : ""}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResourcesMore;


