package com.chert.satan;

import jakarta.persistence.*;

import java.util.Objects;


@Entity
public class Dog {
    @Id
    @SequenceGenerator(
            name = "dog_id_sequence",
            sequenceName = "dog_id_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "dog_id_sequence"
    )
    private Integer id;
    private String name;
    private String breed;
    private Integer age;
    private String imagePath;

    public Dog(Integer id, String name, String breed, Integer age, String imagePath) {
        this.id = id;
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.imagePath = imagePath;
    }

    public Dog() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Dog dog = (Dog) o;
        return Objects.equals(id, dog.id) && Objects.equals(name, dog.name) && Objects.equals(breed, dog.breed) && Objects.equals(age, dog.age) && Objects.equals(imagePath, dog.imagePath);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, breed, age, imagePath);
    }

    @Override
    public String toString() {
        return "Dog{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", breed='" + breed + '\'' +
                ", age=" + age +
                ", imagePath='" + imagePath + '\'' +
                '}';
    }
}
