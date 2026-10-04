import { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList, Post } from '../App';
import PlatformInfo from '../components/PlatformInfo';

type Props = NativeStackScreenProps<RootStackParamList, 'Posts'>;

export default function PostsScreen({ navigation }: Props) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [searchText, setSearchText] = useState<string>('');

    const fetchPosts = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(
                'https://dummyjson.com/posts?delay=3000'
            );

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const data = await response.json();

            setPosts(data.posts);
        } catch (err) {
            setError('Failed to fetch posts');
        } finally {
            setLoading(false);
        }
    };

    const filteredPosts = posts.filter((post) => {
        const search = searchText.toLowerCase();

        return (
            post.title.toLowerCase().includes(search) ||
            post.body.toLowerCase().includes(search)
        );
    });

    useEffect(() => {
        fetchPosts();
    }, []);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" />

                <Text style={styles.loadingText}>
                    Loading posts...
                </Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text style={styles.errorText}>
                    {error}
                </Text>

                <Button mode="contained" onPress={fetchPosts}>
                    Retry
                </Button>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <PlatformInfo />

            <TextInput
                style={styles.searchInput}
                placeholder="Search posts..."
                value={searchText}
                onChangeText={setSearchText}
            />

            {filteredPosts.length === 0 && (
                <Text style={styles.noResults}>
                    No posts found.
                </Text>
            )}

            <FlatList
                data={filteredPosts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        style={styles.card}
                        onPress={() =>
                            navigation.navigate('Details', {
                                post: item,
                            })
                        }
                    >
                        <Card.Content>
                            <Text style={styles.title}>
                                {item.title}
                            </Text>
                            <Text style={styles.id}>
                                Post ID: {item.id}
                            </Text>
                        </Card.Content>
                    </Card>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 10,
    },

    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    card: {
        marginBottom: 12,
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },


    id: {
        marginTop: 10,
        fontSize: 12,
    },

    loadingText: {
        marginTop: 12,
        fontSize: 16,
    },

    errorText: {
        fontSize: 16,
        marginBottom: 16,
        textAlign: 'center',
    },

    searchInput: {
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
    },

    noResults: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 16,
    },
});
